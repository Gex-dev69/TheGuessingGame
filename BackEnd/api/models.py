from django.db import models

# Create your models here.
class Game(models.Model):
  player_name = models.TextField(max_length=10)
  

    

  def __str__(self):
    return self.player_name

class actualGame(models.Model):
  selected_word = models.TextField()
  attempts_left = models.IntegerField(default=7)
  word_length = models.IntegerField(default=0)
  attemptDone = models.BooleanField(default=False)
  subject = models.TextField()
  def __str__(self):
    return self.word_length
