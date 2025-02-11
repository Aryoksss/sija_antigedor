import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    iterations: 10000, 
    vus: 10, 
};

export default function () {
    let res = http.get('http://10.201.1.138:800/eazyn/login.php');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}