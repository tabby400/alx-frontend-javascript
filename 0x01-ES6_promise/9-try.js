// captures the result or an error, and adds a processing message to the queue
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
