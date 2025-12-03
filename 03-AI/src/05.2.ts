class Notification {
    logDelivery(): string {
        return "Attempting delivery."
    }
}

class PushNotification extends Notification{
    override logDelivery(): string {
        return `Delivered to mobile device.`
    }
}
class EmailNotification extends Notification{
    override logDelivery(): string {
        return `Email queued for sending.`
    }
}

const notifs: Notification[] = [
    new Notification(),
    new PushNotification(),
    new EmailNotification()
]

notifs.forEach(noti => console.log(noti.logDelivery()))