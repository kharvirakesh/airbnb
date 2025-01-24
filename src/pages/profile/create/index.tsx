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
              
                </form>
            </div>
        </section>
      </div>
  );
}
export default createProfilePage;
