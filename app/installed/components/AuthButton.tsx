"use client";

type Props = {
  url: string;
};

export const AuthButton = ({ url }: Props) => {
  return (
    <button onClick={() => window.location.assign(url)}>認証を開始する</button>
  );
};
