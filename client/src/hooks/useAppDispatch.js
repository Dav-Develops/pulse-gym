import { useDispatch, useSelector } from 'react-redux';

export default function useAppDispatch() {
  return useDispatch();
}

export function useAppSelector(selector) {
  return useSelector(selector);
}
