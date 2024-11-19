package service

import (
	"future-path/internal/repository"
	"future-path/pkg/bcrypt"
	"future-path/pkg/jwt"
)

type Service struct {
	UserService        IUserService
	BeritaService      IBeritaService
	SekolahService     ISekolahService
	UniversitasService IUniversitasService
	FAQService         IFAQService
	KepemilikanService IKepemilikanService
}

func NewService(repository *repository.Repository, bcrypt bcrypt.Interface, jwt jwt.Interface) *Service {
	return &Service{
		UserService:        NewUserService(repository.UserRepository, bcrypt, jwt),
		BeritaService:      NewBeritaService(repository.BeritaRepository),
		SekolahService:     NewSekolahService(repository.SekolahRepository),
		UniversitasService: NewUniversitasService(repository.UniversitasRepository),
		FAQService:         NewFAQService(repository.FAQRepository),
		KepemilikanService: NewKepemilikanService(repository.KepemilikanRepository),
	}
}
