import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI",
  "MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT",
  "VT","VA","WA","WV","WI","WY","DC"
];

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Report</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#2e2a26]">Register Your Table</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Thank you for hosting. Your table strengthens a growing national movement. This takes less than one minute.
          </p>
          <form action="/api/report-table?context=register" method="post" className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" required placeholder="Host Name" className="rounded-xl border px-4 py-3" />
              <input name="email" type="email" required placeholder="Email" className="rounded-xl border px-4 py-3" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input name="city" required placeholder="City" className="rounded-xl border px-4 py-3" />
              <select name="state" required className="rounded-xl border px-4 py-3">
                <option value="">State</option>
                {STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input name="tableDate" required type="date" className="rounded-xl border px-4 py-3" />
              <input
                name="totalPeople"
                required
                type="number"
                min={1}
                placeholder="Total people at the table"
                className="rounded-xl border px-4 py-3"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="committedWithin30"
                type="number"
                min={0}
                placeholder="Guests who committed to host"
                className="rounded-xl border px-4 py-3"
              />
              <select name="hostAgain" className="rounded-xl border px-4 py-3">
                <option value="">Would you host again?</option>
                {["Yes", "Maybe", "No"].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <select name="organizationInterest" className="rounded-xl border px-4 py-3">
              <option value="">Interested in bringing L.I.F.E. to your organization?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <textarea
              name="notes"
              placeholder="What stood out? (optional)"
              className="min-h-[140px] rounded-xl border px-4 py-3"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
            >
              Submit Registration
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
