const core = require('@actions/core');

try {
  const ref = core.getInput('ref');
  const [version] = ref.split("/").slice(-1)
  console.log(`the new version is ${version}!`);
  core.setOutput("version", version);
} catch (error) {
  core.setFailed(error.message);
}