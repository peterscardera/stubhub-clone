# stubhub-clone

'kubectl get all' to see all applications and services on tthe cluster

## Flow
Outside world connects to our load balancer (IP address) (of our cloud provider). The load balancer.

-ingress-ngnix creates the load balancer automatically in gcloud. used so anything heading to /api/users/ flows to the auth-srv. in /etc/hosts I redirected ticketing.dev to the laod Balancer IP 

-skaffold is used to reach out to google cloud for changes. (Files that are not sync (ie package.json not files from src as per line 17) will send to google cloud for them to build the image)