import io from 'socket.io-client';
import { BASE_URL } from '@config/enviroments';

const socket = io(`${BASE_URL}twitter`, { forceNew: true });

export default socket;
