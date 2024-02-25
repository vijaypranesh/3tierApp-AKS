# 3tierApp-AKS
3 Tier Application Containerized and deployed on AKS.

Containerization with Azure Container Service:
To ensure seamless deployment and management of each tier of the application, I opted for containerization. Leveraging Azure Container Service, I containerized each tier of the application using Docker, encapsulating them into individual containers. This approach offered portability and consistency, enabling hassle-free deployment across different environments.

Deployment in Azure Kubernetes Service (AKS):
For orchestrating and managing the containerized application, I turned to Azure Kubernetes Service (AKS). I explored two distinct approaches for deploying the 3-tier application within AKS:

a. Multiple Clusters for Each Tier:
Initially, I deployed each tier of the application into separate AKS clusters. This approach offered isolation and autonomy for each tier, allowing independent scaling and management. While this setup provided granular control over resource allocation, it also introduced complexity in managing multiple clusters.

b. Single Cluster with Multiple Pods:
Alternatively, I experimented with deploying the entire 3-tier application within a single AKS cluster, utilizing multiple pods to segregate each tier. This consolidated approach simplified management and resource utilization, offering a cohesive deployment environment. Although it required careful pod configuration and resource allocation, it significantly reduced operational overhead.
