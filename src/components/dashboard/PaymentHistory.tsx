import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface Payment {
  id: string;
  amount: number;
  status: string;
  createdAt: string;
}

interface PaymentHistoryProps {
  payments: Payment[];
}

export default function PaymentHistory({ payments }: PaymentHistoryProps) {
  if (payments.length === 0) {
    return (
      <Card variant="default" padding="md">
        <p className="text-center text-slate-400 py-8">No payment history yet.</p>
      </Card>
    );
  }

  return (
    <Card variant="default" padding="md">
      <h3 className="text-lg font-bold font-heading text-white mb-4">Payment History</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-2">Date</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-2">Amount</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-white/5">
                <td className="py-3 px-2 text-sm text-slate-300">
                  {new Date(payment.createdAt).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
                <td className="py-3 px-2 text-sm text-white font-medium">₹{payment.amount / 100}</td>
                <td className="py-3 px-2">
                  <Badge variant={payment.status === 'SUCCESS' ? 'success' : payment.status === 'PENDING' ? 'warning' : 'default'}>
                    {payment.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
