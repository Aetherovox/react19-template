export async function AsyncComponent() {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  await promise;

  return <div>Awaited async el</div>;
}
