# Model data: di mana hubungan terputus

<p class="lead" style="margin:.1rem 0 .4rem">Tim, projek, dan kegiatan punya ID. RK sisi SKP dan RK sisi projek tidak.</p>

```mermaid {scale: 0.62}
flowchart LR
  TIM["Tim"] -->|"timkerjaid (ID)"| PRJ["Projek"]
  PRJ -->|"rkproyekid (ID)"| RKP["RK sisi projek"]
  TIM -->|"team_id (ID)"| RKS["RK sisi SKP"]
  RKS -->|"rkid (ID)"| KEG["Kegiatan"]
  RKP -. "TIDAK ADA ID bersama" .- RKS
  RKS -. "project_id diisi lewat TEKS" .-> PRJ
```

<!--
Garis tebal adalah hubungan berdasarkan ID. Garis putus-putus adalah satu-satunya yang berdasarkan teks: RK di sisi SKP tidak membawa ID projek, dan RK di sisi projek memakai ID lain. Inilah sebabnya 1.006 RK tadinya tanpa projek. Setelah dihubungkan lewat teks, 537 terisi dan 469 sisanya memang tidak berada di projek mana pun atau ambigu.
-->
