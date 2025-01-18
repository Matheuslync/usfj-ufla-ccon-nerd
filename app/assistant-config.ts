export let assistantId = "asst_1ZcOidmb6CAZS3XHXj5nvIhZ"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
