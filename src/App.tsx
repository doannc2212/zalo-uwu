import {
  isPermissionGranted,
  requestPermission,
} from "@tauri-apps/api/notification";
import { onMount } from "solid-js";
import "./App.css";
const needPermission = async () => {
  const granted = await isPermissionGranted();
  console.log(granted);
  if (!granted) {
    const value = await requestPermission();
    console.log(value);
  }
};

function App() {
  onMount(() => {
    needPermission();
  });

  return <div class="container"></div>;
}

export default App;
