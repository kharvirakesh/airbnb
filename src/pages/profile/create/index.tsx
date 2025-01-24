import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const createProfileAction = async(formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  console.log(firstName)
}

function createProfilePage() {
  return (
      <div>
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
            <div className='border p-8 rounded-md '>
                <form action={createProfileAction}>
                  <div className="mb-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input type="text" id="firstName" name="firstName" />
                  </div>
                  <Button type="submit" size="lg">
                      Create Profile
                  </Button>
                </form>
            </div>
        </section>
      </div>
  );
}
export default createProfilePage;
