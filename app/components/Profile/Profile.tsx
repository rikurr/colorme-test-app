import { use } from "react";
import { cookies } from "next/headers";

// ショップデータの取得
async function getShop() {
  const nextCookies = cookies();
  const accessToken = nextCookies.get("access_token");
  const scope = nextCookies.get("scope");
  const shopUrl = "https://api.shop-pro.jp/v1/shop.json";
  const res = await fetch(shopUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await res.json();

  console.log("ショップデータ", json);
  return json;
}

type Shop = {
  shop: {
    id: string;
    user_mail: string;
  };
  errors: {
    code: number;
    message: string;
    status: number;
  }[];
};

export const Profile = () => {
  const data: Shop = use(getShop());

  if (!data.shop || data.errors) {
    return <div>未ログインです</div>;
  }
  return (
    <div>
      <p>ID:{data.shop.id}</p>
      <p>e-mail:{data.shop.user_mail}</p>
    </div>
  );
};
