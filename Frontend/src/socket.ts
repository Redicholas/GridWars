import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
  });
  
  // "undefined" means the URL will be computed from the `window.location` object
  const URL = "https://hammerhead-app-pc9h3.ondigitalocean.app/";
  
  export const socket = io(URL);
  
  socket.on("connect", () => {
    state.connected = true;
  });
  
  socket.on("disconnect", () => {
    state.connected = false;
  });
  