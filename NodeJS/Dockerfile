# Start from a plain Alpine Linux image
FROM alpine:3.19

# Manually install nodejs AND npm together
RUN apk update && \
    apk add --no-cache nodejs npm && \
    rm -rf /var/cache/apk/*

# Create a dedicated system user and group for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set up the active working directory 
WORKDIR /usr/src/app

# Copy package manifests first for efficient image layer caching
COPY /App/package*.json ./

# Install the express production dependency inside the container
RUN npm install --only=production

# Copy your dual-server source code into the container
COPY /App/ .

# Ensure our non-root user owns the directory paths
RUN chown -R appuser:appgroup /usr/src/app

# Expose BOTH network ports to the outside world
EXPOSE 3000
EXPOSE 4000

# Switch away from root to the unprivileged user
USER appuser

# Launch the dual server application
CMD ["npm", "start"]