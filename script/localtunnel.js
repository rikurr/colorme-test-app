const localtunnel = require("localtunnel");
const fs = require("fs");

// ローカルトンネル起動時にENVファイルのURLを書き換える
const updateEnvUrl = async (newUrl) => {
  console.log("new URL", newUrl);
  const envFile = fs.readFileSync(".env", "utf-8");
  const envList = envFile.split(/\r\n|\n/);
  const envs = envList.map((env) => {
    const split = env.split("=");
    const key = split[0];
    const value = split[1];
    return {
      key,
      value,
    };
  });

  const updateEnvs = envs
    .filter((env) => env.value)
    .map((env) => {
      if (env.key === "URL") {
        return {
          key: env.key,
          value: newUrl,
        };
      }

      return {
        ...env,
      };
    });

  const envArrayToString = updateEnvs
    .map((env) => `${env.key}=${env.value}`)
    .join("\n");

  try {
    fs.writeFileSync(".env", envArrayToString);
    console.log("Update env file");
  } catch (e) {
    console.log(e.message);
  }
};

(async () => {
  try {
    const tunnel = await localtunnel({ port: 3000 });
    updateEnvUrl(tunnel.url);
  } catch (error) {
    console.log("localtunnelの起動に失敗しました。", error);
  }
})();
