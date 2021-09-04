const amqp = require('amqplib');

// tidak perlu membuat class karena kita tidak akan menggunakan keyword this yang merujuk pada instance dari class
const ProducerService = {
  // fungsi ini akan digunakan pada fungsi handler dari permintaan ekspor yang masuk
  sendMessage: async (queue, message) => {
    const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, {
      durable: true,
    });

    await channel.sendToQueue(queue, Buffer.from(message));

    setTimeout(() => {
      connection.close();
    }, 1000);
  },
};

module.exports = ProducerService;
