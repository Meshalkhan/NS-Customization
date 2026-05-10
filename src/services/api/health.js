import { API_PREFIX } from '../../constants/api';
import { httpJson } from '../httpClient';

export function fetchHealth() {
  return httpJson(`${API_PREFIX}/v1/health`);
}
