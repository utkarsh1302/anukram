export interface Callback<T> {
  onSuccess: (response: T) => void;
  onFailure: (error: T) => void;
}
