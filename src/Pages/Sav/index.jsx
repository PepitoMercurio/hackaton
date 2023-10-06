import React from "react";
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import "../../Style/scss/Pages/Sav/styles.scss"
import Footer from "../../Compotants/Footer";
import Mailer from "../../Compotants/Mailer";
import velibImage from "../../Style/img/Vélib'-Métropole.jpg";

export default function SavPage() {
    return (
        <div className="Sav">
            <Header/>
            
                <div className="Contenue">
                    <div className="Image">
                        <h2>Nous Sommes à votre services</h2>
                        <img src={velibImage} alt="Velib Paris" />
                    </div>
                    <div className="Contenue__etape">
                        <div className="Titre">
                            <h2>En cas de Problèmes</h2>
                        </div>
                        <div className="Intro">
                            <h3>Lorsque vous rencontrez un problème avec votre Vélib', il est important de suivre quelques étapes pour résoudre la situation de manière efficace et sécuritaire. Voici un guide simple sur ce qu'un utilisateur devrait faire en cas de problème avec son Vélib' :</h3>
                        </div>
                        <div className="toutes">
                            <div className="Etapes">
                                <p> 1 · Arrêtez-vous en toute sécurité : Si vous remarquez un problème avec votre Vélib', comme un dysfonctionnement mécanique, une crevaison ou un autre souci, arrêtez-vous en toute sécurité sur le côté de la route ou dans un endroit désigné.</p>
                            </div>
                            <div className="Etapes">
                                <p> 2 · Stationnez correctement : Assurez-vous de stationner le vélo dans une zone autorisée et bien en vue. Ne le laissez pas obstruer le passage des piétons ou entraver la circulation.</p>
                            </div>
                            <div className="Etapes">
                                <p> 3 · Vérifiez le problème : Examinez le vélo pour identifier le problème. Il peut s'agir d'une crevaison, d'un frein défectueux, d'une chaîne cassée, etc. Si le problème est lié à la mécanique du vélo, il peut être préférable de ne pas continuer à rouler pour éviter tout risque.</p>
                            </div>
                            <div className="Etapes">
                                <p> 4 · Contactez le service client : Utilisez les informations de contact fournies par le service de location de vélos (application mobile, site web, numéro de téléphone) pour signaler le problème. Décrivez le problème de manière détaillée, en indiquant l'emplacement exact du vélo si possible.</p>
                            </div>
                            <div className="Etapes">
                                <p> 5 · Ne tentez pas de réparation si vous n'êtes pas qualifié : Si vous n'êtes pas sûr de pouvoir réparer le vélo vous-même, il vaut mieux attendre l'assistance du service client ou un technicien. Tenter de réparer un vélo sans expérience peut aggraver le problème.</p>
                            </div>
                            <div className="Etapes">
                                <p> 6 · Suivez les instructions du service client : Le service client vous guidera sur la marche à suivre pour résoudre le problème. Il peut s'agir de vous fournir un code pour déverrouiller un autre vélo, d'envoyer un technicien pour réparer le vélo défectueux, ou de vous orienter vers la station la plus proche pour un échange.</p>
                            </div>
                            <div className="Etapes">
                                <p>7 · Soyez patient : La résolution du problème peut prendre un certain temps, alors soyez patient et suivez les conseils du service client.</p>
                            </div>
                            <div className="Etapes">
                                <p>8 · Gardez un esprit sécuritaire : Assurez-vous que votre sécurité est toujours une priorité. Si le vélo est dangereux à utiliser en raison du problème, ne tentez pas de le faire fonctionner. Attendez plutôt l'assistance.</p>
                            </div>
                            <div className="Etapes">
                                <p>9 · Gardez une preuve de contact : Conservez une trace écrite de votre communication avec le service client au cas où vous auriez besoin de prouver que vous avez signalé le problème.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <Mailer/>
            <Footer/>
        </div>
    )
}