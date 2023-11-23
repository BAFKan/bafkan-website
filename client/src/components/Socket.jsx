import { io } from "socket.io-client"; // bebas dipake dimana, disaat mau nge fetch data
const socket = io("http://localhost:3000");

export default socket;
