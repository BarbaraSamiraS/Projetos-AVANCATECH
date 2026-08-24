export default function BookingSummary({ booking }) {
  return (
    <div>
      <h3>Booking Summary</h3>

      <p>Service: {booking.service}</p>
      <p>Date: {booking.date}</p>
      <p>Time: {booking.time}</p>

      <h4>Total: {booking.price}</h4>
    </div>
  );
}