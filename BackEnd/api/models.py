from django.db import models

# Create your models here.
class Game(models.Model):
  player_name = models.TextField(max_length=10)
  attempts_left = models.IntegerField(default=7)
  Selected_word = models.TextField(default="random")
  word_progress = models.TextField(default="set_progress")
    

  def __str__(self):
    return self.player_name