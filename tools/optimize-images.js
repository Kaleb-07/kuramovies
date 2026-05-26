const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const INPUT_DIRS = [
  path.join(__dirname, '..', 'public', 'team'),
  path.join(__dirname, '..', 'public', 'workspace'),
]
const OUT_DIR = path.join(__dirname, '..', 'public', 'optimized')
const WIDTHS = [400, 800, 1200]

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const base = path.basename(filePath, ext)
  const input = filePath

  try {
    const meta = await sharp(input).metadata()
    for (const w of WIDTHS) {
      if (meta.width && meta.width < w) continue
      const outBase = path.join(OUT_DIR, `${base}-${w}`)

      // WebP
      await sharp(input)
        .resize({ width: w })
        .webp({ quality: 78, effort: 6 })
        .toFile(outBase + '.webp')

      // JPEG fallback
      await sharp(input)
        .resize({ width: w })
        .jpeg({ quality: 82 })
        .toFile(outBase + '.jpg')
    }

    // Also write a small placeholder (blurred tiny) ~20px for LQIP
    await sharp(input)
      .resize({ width: 20 })
      .blur(1)
      .jpeg({ quality: 40 })
      .toFile(path.join(OUT_DIR, `${base}-placeholder.jpg`))

    console.log('Optimized:', path.relative(process.cwd(), input))
  } catch (err) {
    console.error('Failed:', filePath, err.message)
  }
}

async function run() {
  for (const dir of INPUT_DIRS) {
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir)
    for (const f of files) {
      const full = path.join(dir, f)
      if (!fs.statSync(full).isFile()) continue
      const ext = path.extname(full).toLowerCase()
      if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue
      await processFile(full)
    }
  }
  console.log('Done — optimized images in public/optimized')
}

run().catch((e) => { console.error(e); process.exit(1) })
