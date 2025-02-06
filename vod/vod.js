const { Context } = require('@osaas/client-core');
const { createVodPipeline, createVod } = require('@osaas/client-transcode');

async function setup(context) {
  const pipeline = await createVodPipeline('devguide', context);
  return pipeline;
}

async function main() {
  const ctx = new Context();
  const pipeline = await setup(ctx);

  const vod = await createVod(pipeline,
    'https://testcontent.eyevinn.technology/mp4/VINN.mp4',
    ctx
  );
  console.log(vod);
}

main();