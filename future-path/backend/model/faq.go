package model

type CreateFAQ struct {
	Judul_FAQ string `json:"judul_faq" binding:"required"`
	Isi_FAQ   string `json:"isi_faq" binding:"required"`
}

type GetFAQ struct {
	Judul_FAQ string `json:"judul_faq"`
	Isi_FAQ   string `json:"isi_faq"`
}

type UpdateFAQ struct {
	Judul_FAQ string `json:"judul_faq"`
	Isi_FAQ   string `json:"isi_faq"`
}
