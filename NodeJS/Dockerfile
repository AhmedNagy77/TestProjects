# Start from a completely plain, minimal Alpine Linux image
FROM alpine:3.19

# Update package repositories and manually install nodejs
RUN apk update && \
    apk add --no-cache nodejs && \
    rm -rf /var/cache/apk/*

# Create a dedicated system user and group for running the app securely
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set up the active working directory 
WORKDIR /usr/src/app

# Copy your native JavaScript source code into the container
COPY /App/server.js .

# Ensure the app user owns the application files
RUN chown -R appuser:appgroup /usr/src/app

# Expose the internal port to the outside world
EXPOSE 3000

# Switch away from root to the unprivileged user for security
USER appuser

# Launch the server using the manually installed node runtime
CMD ["node", "server.js"]