import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    iterations: 1000,
    vus: 100,
}

export default function () {
    let res = http.get('http://10.201.1.138:800/eazyn/login.php');
    res = res.submitForm({
        formSelector: 'form',
        fields: { username: 'mutiara', password: '123456' },
      });
      sleep(3);
}