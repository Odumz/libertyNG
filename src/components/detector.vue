<template>
  <div class="w-full h-auto md:w-[40rem] relative">
    <canvas
      ref="drawingBoard"
      class="absolute w-full h-full bg-transparent top-0 left-0 mx-auto"
    ></canvas>
    <video
      ref="video"
      class="w-full h-full mx-auto rounded-[.625rem]"
      autoplay
      playsinline
    ></video>

    <!-- <select v-model="camera">
            <option value="">Change camera</option>
            <option v-for="(item, index) in devices" :key="index" :value="item.deviceId">{{ item.label }}</option>
        </select> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as cocoSSD from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
// import Swal from 'vue-sweetalert2';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const emits = defineEmits(['popCamera', 'popAudio'])

const video = ref<HTMLVideoElement>();
const devices = ref<MediaDeviceInfo[]>([]);
const audioDevices = ref<MediaDeviceInfo[]>([]);
const camera = ref<string>("");
const audio = ref<string>("");
const drawingBoard = ref<HTMLCanvasElement>();

onMounted(async () => {
  if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    devices.value = await navigator.mediaDevices.enumerateDevices();
    audioDevices.value = await navigator.mediaDevices.enumerateDevices();
    console.log("device nah ", devices.value);
    devices.value = devices.value.filter((item) => item.kind == "videoinput");
    audioDevices.value = audioDevices.value.filter((item) => item.kind == "audioinput");
    console.log("audio device nah ", audioDevices.value);
    camera.value = devices.value[0].deviceId;
    audio.value = audioDevices.value[0].deviceId;
    if (!camera.value) {
      console.log('the camera is bad', camera.value);

      Swal.fire({
        title: 'Error!',
        text: 'Check your camera permissions and try again.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      emits('popCamera', false)
      return
    } else {
      emits('popCamera', true)
    }
    if (!audio.value) {
      console.log('the audio is bad', audio.value);

      Swal.fire({
        title: 'Error!',
        text: 'Check your audio permissions and try again.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      emits('popAudio', false)
      return
    } else {
      emits('popAudio', true)
    }
    console.log('the camera is ', camera.value);
    console.log('the audio is ', audio.value);
    // emits('popCamera', true)
    // emits('popAudio', true)
    startStreaming();
  }
});

const startStreaming: void = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        deviceId: camera.value as string,
      },
    })
    .then((stream: MediaStream) => {
      (video.value as HTMLVideoElement).srcObject = stream;
      setInterval(() => {
        detectObjects();
      }, 1d000);
    });
};

const detectObjects: Promise<void> = async () => {
  const model = await cocoSSD.load();
  const predictions: cocoSSD.DetectedObject[] = await model.detect(
    video.value as HTMLVideoElement,
  );

  let context: CanvasRenderingContext2D;

  if (drawingBoard.value) {
    context = drawingBoard.value.getContext("2d") as CanvasRenderingContext2D;
    drawingBoard.value.height = (video.value as HTMLVideoElement).videoHeight;
    drawingBoard.value.width = (video.value as HTMLVideoElement).videoWidth;
  }

  // const context = (drawingBoard.value as HTMLCanvasElement).getContext("2d")

  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;
    const label = prediction.class;

    const color = "blue";
    const font = "1.5rem Arial";
    const strokeWidth = 5;
    if (context) {
      context.beginPath();
      context.font = font;
      context.strokeStyle = color;
      context.fillStyle = color;
      context.lineWidth = strokeWidth;
      context.fillText(label, x, y);
      context.rect(x, y, width, height);
      context.stroke();
    }
  });
  console.log(predictions);
};
</script>
