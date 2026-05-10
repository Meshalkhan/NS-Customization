import { Spinner } from '../ui/Spinner';
import { useApiHealth } from '../../hooks/useApiHealth';

export function SystemStatusBar() {
  const { phase, payload, error, reload } = useApiHealth();

  return (
    <div className="system-status-bar" role="status" aria-live="polite">
      <div className="system-status-bar__inner container">
        {phase === 'loading' && (
          <span className="system-status-bar__row">
            <Spinner label="Checking API" />
            <span className="system-status-bar__msg">Checking services…</span>
          </span>
        )}
        {phase === 'ready' && payload?.ok && (
          <span className="system-status-bar__row system-status-bar__row--ok">
            <span className="system-status-bar__dot" />
            <span>
              Services online · {payload.service}
            </span>
          </span>
        )}
        {phase === 'error' && (
          <span className="system-status-bar__row system-status-bar__row--err">
            <span className="system-status-bar__msg">API unreachable ({error?.message || 'network'})</span>
            <button type="button" className="system-status-bar__retry btn btn-sm btn-outline-light" onClick={reload}>
              Retry
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
