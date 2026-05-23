import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "Pengumuman",

	// 公告内容
	content: "Selamat datang di buku pegangan teknis saya!",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "Pelajari lebih lanjut",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
