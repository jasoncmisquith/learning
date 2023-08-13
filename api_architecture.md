graph LR

subgraph "AWS Services"
  APIGateway --> AuthorizerLambda
  APIGateway --> InterceptorLambda
  AuthorizerLambda --> Service1
  InterceptorLambda --> Service1
  Service1 --> EC2
  Service1 --> ApiService[Kubernetes Microservices]
  ApiService --> NestJSControllers
  EC2 --> Postgres
  EC2 --> Elasticache
end

subgraph "Kubernetes Cluster"
  ApiService --> NestJSService(Account)
  ApiService --> NestJSService(BGT)
  NestJSService(Account) --> NestJSControllers(Account)
  NestJSService(BGT) --> NestJSControllers(BGT)
end

Postgres --> Service1
Elasticache --> Service1
