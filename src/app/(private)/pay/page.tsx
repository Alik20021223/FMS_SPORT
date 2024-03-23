import { TheResultPay } from '@/components/Pay/TheResultPay';
import { TheTopUpPay } from '@/components/Pay/TheTopUpPay';

export default function PayPage() {
  return (
    <section className="container mx-auto flex justify-center h-full">
      <div className="flex gap-14">
        <TheTopUpPay />
        <TheResultPay />
      </div>
    </section>
  )
}
