import { useCallback, useEffect, useState } from 'react';
import { fetchHealth } from '../services/api/health';

export function useApiHealth() {
  const [phase, setPhase] = useState('loading');
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);

  const run = useCallback(async () => {
    setPhase('loading');
    setError(null);
    try {
      const data = await fetchHealth();
      setPayload(data);
      setPhase('ready');
    } catch (e) {
      setPayload(null);
      setError(e);
      setPhase('error');
    }
  }, []);

  useEffect(() => {
    run();
  }, [run]);

  return { phase, payload, error, reload: run };
}
