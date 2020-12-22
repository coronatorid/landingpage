export VERSION 	?= $(shell git show -q --format=%h)
export IMAGE 		?= ghcr.io/coronatorid/landingpage/web

build:
	sudo docker build -t $(IMAGE):$(VERSION) -f ./Dockerfile .

push:
	sudo docker push $(IMAGE):$(VERSION)
