import * as style from './style.css';

export function LoadingSpinner() {
  return (
    <div className={style.loadingBox}>
      <div className={style.spinner} />
    </div>
  );
}
