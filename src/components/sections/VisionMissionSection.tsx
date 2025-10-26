import { Eye, Target } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container-maritime">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Visi & Misi Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Visi</h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Menjadi perusahaan pemberangkatan Anak Buah Kapal terpercaya dan
              profesional dengan standar internasional tertinggi, yang
              memberikan peluang karir terbaik dan kesejahteraan optimal bagi
              setiap ABK.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Misi</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary dark:text-blue-400 font-bold text-lg">
                  ✓
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  Menyediakan layanan rekrutmen dan penempatan ABK berkualitas
                  tinggi sesuai kebutuhan industri maritim global
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary dark:text-blue-400 font-bold text-lg">
                  ✓
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  Memastikan kesejahteraan, perlindungan, dan hak ABK sesuai
                  standar hukum internasional (ICCPR, MLC)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary dark:text-blue-400 font-bold text-lg">
                  ✓
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  Bermitra dengan shipping companies terkemuka dan memberikan
                  peluang karir internasional
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary dark:text-blue-400 font-bold text-lg">
                  ✓
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  Terus mengembangkan SDM maritim yang kompeten, profesional,
                  dan siap menghadapi tantangan industri
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
