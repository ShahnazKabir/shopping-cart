import axios from 'axios';

export default axios.create({
  baseURL: 'https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/',
  headers: {
    'Content-type': 'application/json',
  },
});
