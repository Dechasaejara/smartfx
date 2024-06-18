# Use the official Deno image as the base
FROM denoland/deno:1.31.1

# Set the working directory
WORKDIR /app

# Copy the source code
COPY . .

# Install the required dependencies
RUN deno cache mod.ts

# Set the environment variables
ENV BOT_TOKEN="7377106182:AAGOS0_xvyFiG8eU8zTtb6Cde3hjB41Z7Wc"
#ENV WEBHOOK_SECRET=<your_webhook_secret>

# Expose the port
EXPOSE 8000

# Run the application
CMD ["deno", "run", "--allow-net", "--allow-env", "mod.ts"]