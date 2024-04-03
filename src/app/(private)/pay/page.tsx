import { TheResultPay } from '@/components/Pay/TheResultPay';
import { TheTopUpPay } from '@/components/Pay/TheTopUpPay';

export default function PayPage() {
  return (
    <section className="w-[700px] pt-5 pb-5 container flex justify-center h-full">
      <div className="flex gap-14">
        <TheTopUpPay />
        <TheResultPay />
      </div>
    </section>
  )
}
