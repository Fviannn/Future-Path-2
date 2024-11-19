package main

import (
	"future-path/internal/handler/rest"
	"future-path/internal/repository"
	"future-path/internal/service"
	"future-path/pkg/bcrypt"
	"future-path/pkg/config"
	"future-path/pkg/database/mariadb"
	"future-path/pkg/jwt"
	"future-path/pkg/middleware"
	"log"
)

func main() {
	config.LoadEnvironment()
	db, err := mariadb.ConnectDatabase()

	if err != nil {
		log.Fatal(err)
	}

	if err := mariadb.Migrate(db); err != nil {
		log.Fatal(err)
	}

	repo := repository.NewRepository(db)
	bcrypt := bcrypt.Init()
	jwt := jwt.Init()
	svc := service.NewService(repo, bcrypt, jwt)
	middleware := middleware.Init(svc, jwt)

	r := rest.NewRest(svc, middleware)
	r.MountEndpoint()
	r.Run()
}
