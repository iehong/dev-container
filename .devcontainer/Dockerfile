FROM mcr.microsoft.com/devcontainers/base:alpine

# 安装 Java 21 和 Maven（参考前文方案）
USER root
RUN apk add --no-cache curl tar bash openjdk21 maven 
RUN curl -fsSL https://bun.sh/install | bash

ENV PATH /root/.bun/bin:$PATH

# 保持容器运行
CMD ["tail", "-f", "/dev/null"]
