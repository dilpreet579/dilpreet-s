from PIL import Image

img = Image.open(r"D:\sleek-portfolio\public\assets\sprite.png")
print(f"Original size: {img.width} x {img.height}")

# Based on transparent row analysis:
# IDLE content:  y=30  to y=157  (128px tall)
# WAVE content:  y=187 to y=314  (128px tall)
# TALK content:  y=346 to y=472  (127px tall)
# Full width: 527px

IDLE_ROW  = (0, 30,  527, 158)   # left, top, right, bottom
WAVE_ROW  = (0, 187, 527, 315)
TALK_ROW  = (0, 346, 527, 473)

idle = img.crop(IDLE_ROW)
wave = img.crop(WAVE_ROW)
talk = img.crop(TALK_ROW)

row_h = idle.height  # 128px

# Stack all 3 rows into one clean sprite sheet
sheet = Image.new("RGBA", (527, row_h * 3), (0, 0, 0, 0))
sheet.paste(idle, (0, 0))
sheet.paste(wave, (0, row_h))
sheet.paste(talk, (0, row_h * 2))

out_path = r"D:\sleek-portfolio\public\assets\sprite-sheet.png"
sheet.save(out_path, "PNG")

print(f"Sprite sheet saved: {sheet.width} x {sheet.height}px")
print(f"Each row: {row_h}px tall")
print(f"Each frame: ~{527//5}px wide x {row_h}px tall")
print(f"Saved to: {out_path}")
