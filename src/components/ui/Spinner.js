export function Spinner({ label = 'Loading', size = 'sm' }) {
  const dim = size === 'lg' ? '2.25rem' : '1rem';
  return (
    <span className="ui-spinner" role="progressbar" aria-label={label} style={{ '--spinner-size': dim }}>
      <span className="ui-spinner__ring" />
    </span>
  );
}
