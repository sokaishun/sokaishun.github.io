---
title: k8s
date: "2022-04-15T11:35:00.000Z"
description: "k8s้ขไฟ"
tags: ["k8s"]
thumbnail: "Kubernetes-logo-1.png"
---

## minikube cannot access internet

minikube

```
๐  minikube v1.25.1 on Ubuntu 20.04 (amd64)
    โช KUBECONFIG=/home/songhaijun/.kube/config
โจ  Automatically selected the docker driver. Other choices: none, ssh
๐  Starting control plane node minikube in cluster minikube
๐  Pulling base image ...
๐ฅ  Creating docker container (CPUs=2, Memory=2200MB) ...
โ  This container is having trouble accessing https://k8s.gcr.io
๐ก  To pull new external images, you may need to configure a proxy: https://minikube.sigs.k8s.io/docs/reference/networking/proxy/
๐ณ  Preparing Kubernetes v1.23.1 on Docker 20.10.12 ...
    โช kubelet.housekeeping-interval=5m
    โช Generating certificates and keys ...
    โช Booting up control plane ...
    โช Configuring RBAC rules ...
๐  Verifying Kubernetes components...
    โช Using image gcr.io/k8s-minikube/storage-provisioner:v5
๐  Enabled addons: storage-provisioner, default-storageclass

โ  /usr/local/bin/kubectl is version 1.16.0, which may have incompatibilites with Kubernetes 1.23.1.
    โช Want kubectl v1.23.1? Try 'minikube kubectl -- get pods -A'
๐  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

## ๅ้ก่งฃๆถ

่งฃๆฑบๆณใ่ฆใคใใใชใใใไฝๅใใใฝใณใณใๅ่ตทๅใใใใ่งฃๆถใใใใ

็ตๆ็ใซใpachydermใฎใใใใ็ๆใงใใใ

```bash
NAME                          READY   STATUS    RESTARTS       AGE
etcd-0                        1/1     Running   13 (54m ago)   5d5h
pachd-cdb7d4966-dw2k4         1/1     Running   13 (54m ago)   5d5h
pg-bouncer-66d8b86c4-9tkdt    1/1     Running   13 (54m ago)   5d5h
pipeline-threshold-v1-cmq29   2/2     Running   0              32m
postgres-0                    1/1     Running   13 (54m ago)   5d5h
```