import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	//avatar: "assets/images/avatar.avif",

	// 名字
	name: "Purnomo",

	// 个人签名
	bio: "Dishub Baik",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/prnmjpngst",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:prnmjpngst@gmail.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
